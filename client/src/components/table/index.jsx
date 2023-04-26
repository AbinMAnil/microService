import React, { useState } from "react";
import { FaStreetView } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "../delteButton";
import { PAGE_SIZE } from "../../constants";
import Spinner from "../spinner/spinner";

function Table({
  loading = true,
  data,
  columns,
  onEdit,
  onView,
  onDelete,
  totalCount,
  onPageSizeChange,
}) {
  const [page, setPage] = useState(0);
  return (
    <>
      <table>
        <tr className="tableHeader">
          {(columns || [])?.map((item) => (
            <>
              <th> {item} </th>
            </>
          ))}
        </tr>
        {loading && (
          <div style={{ position: "absolute", left: "50%", bottom: "50%" }}>
            <Spinner width={"50px"} />
          </div>
        )}

        {data?.reverse()?.map((item) => (
          <tr style={{background: loading ?  "rgba(255, 255, 255, 0.39)" : ""}} >
            <td> {item?.id} </td>
            <td>
              {item?.title} {item?.firstname}
            </td>
            <td> {item?.email} </td>
            <td> {item?.dept} </td>
            <td>
              <FaStreetView onClick={() => onView(item)} className="icon" />
            </td>
            <td>
              <FiEdit onClick={() => onEdit(item)} className="icon" />
            </td>
            <td>
              <DeleteButton onDelete={() => onDelete(item)} />
            </td>
          </tr>
        ))}
      </table>

      <div className="pagination">
        <p>&laquo;</p>
        {[...Array(Math.ceil(totalCount / PAGE_SIZE) || 0)].map((_, index) => (
          <p
            className={page === index ? "active" : ""}
            onClick={() => {
              onPageSizeChange(index);
              setPage(index);
            }}
          >
            {index + 1}{" "}
          </p>
        ))}

        <p>&raquo;</p>
      </div>
    </>
  );
}

export default Table;
