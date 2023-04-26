import moment from 'moment'
import React from 'react'

function DetailsCard({data}) {
  return (
    <div style={{ padding: "0rem 1rem" }}>
    <div style={{ display: "flex", gap: "1rem" }}>
      <p style={{ fontSize: "18px" }}>
        <b> Department</b> : {data?.dept}
      </p>
      <p style={{ fontSize: "18px" }}>
        <b> Email</b> : {data?.email}
      </p>
    </div>

    <div style={{ display: "flex", gap: "1rem" }}>
      <p style={{ fontSize: "18px" }}>
        <b> Born date</b> : {moment(data?.birthDate).format("MM ddd yyyy")}
      </p>
      <p style={{ fontSize: "18px" }}>
        <b> Join date</b> :  {moment(data?.joinDate).format("MM ddd yyyy")}
      </p>
    </div>

    <p style={{ fontSize: "18px" }}>
      <b> Salary </b> : {data?.salary}
    </p>
  </div>
  )
}

export default DetailsCard