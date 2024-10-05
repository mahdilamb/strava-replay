"use client";
import "leaflet/dist/leaflet.css";
import 'rsuite/DateRangePicker/styles/index.css';
import "./styles.css"
import { MapContainer } from "react-leaflet/MapContainer";
import { LocationControls } from "@/ui/map-controls/location-controls";
import { TileLayer } from "react-leaflet/TileLayer";
import * as mapLayers from "@/lib/leaflet/map-layers";
import { StravaButton } from "@/ui/strava";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons/faSync"
import { StravaDBv1, earliestActivity, getActivities } from "@/lib/strava/activity-summaries"
import { SummaryActivityDecoded } from "@/lib/strava-service/service"
import { ActivityType } from "@/strava/models/ActivityType"
import { IDBPDatabase } from "idb"
import { ReactElement, useEffect, useState } from "react"
import Image from 'next/image'

import { Polyline } from "react-leaflet"
import DateRangePicker from 'rsuite/DateRangePicker';
import { CustomControl } from "@/ui/map-controls/control";
import { useStrava } from "@/lib/strava";
export type SelectedDate = [Date, Date]

const StravaOverlay = () => {
  const { db } = useStrava()

  const [earliestDate, setEarliestDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<SelectedDate>([new Date(), new Date()])
  const [activityFilter, setActivityFilter] = useState<ActivityType | undefined>(undefined)
  const [overlay, setOverlay] = useState<ReactElement | null>(null)
  useEffect(() => {
    const syncStrava = async () => {
      if (!db) {
        return
      }
      const earliestDate = (await earliestActivity(db))?.startDate
      if (earliestDate) {
        setEarliestDate(new Date(earliestDate))
        setSelectedDate([earliestDate, new Date()])
      }
    }
    syncStrava()
  }, [db])
  useEffect(() => {
    const updateOverlay = async () => {
      if (!db) {
        return
      }
      setOverlay(<Polyline positions={Object.values(await getActivities(db, activityFilter, selectedDate)).filter(el => el.map?.summaryPolyline).map(el => el.map?.summaryPolyline)}></Polyline>)
    }
    updateOverlay()
  }, [activityFilter, db, selectedDate])
  return <>

    <CustomControl position="bottomleft">
      <DateRangePicker
        style={{ width: 230 }}
        defaultValue={[new Date(), new Date()]}
        value={selectedDate}
        placement="topStart"
        cleanable={false}
        editable={true}
        showWeekNumbers={true}
        showOneCalendar={true}
        onOk={range => {
          setSelectedDate(range)
        }}
        onShortcutClick={(range) => {
          setSelectedDate(range.value)
        }} />
    </CustomControl>

    {overlay}
  </>
}

export default function Home() {
  const { status } = useStrava()
  console.log(status)
  return <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    className="flex-1"
    zoomControl={false}
  >
    <TileLayer {...mapLayers.CartoDB.Positron} />
    <LocationControls />
    {status === "ready" && <StravaOverlay />}
    <CustomControl position="bottomright"><StravaButton /></CustomControl>
  </MapContainer>
}
