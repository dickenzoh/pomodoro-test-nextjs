import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const columns = [
  {
    field: "date",
    headerName: "Date",
    width: 150,
    sortable: false,
  },
  {
    field: "task",
    headerName: "Project/Task",
    width: 150,

    sortable: false,
  },
  {
    field: "minutes",
    headerName: "Minutes",
    type: "number",
    width: 110,

    sortable: false,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,

    renderCell: ({ row: { access } }) => {
      return (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor="#fff"
          borderRadius="4px"
        >
          <MoreVertIcon />
        </Box>
      );
    },
  },
];

const rows = [
  { id: 1, date: 1, task: "Snow", minutes: 35 },
  { id: 2, date: 1, task: "Snow", minutes: 35 },
  { id: 3, date: 1, task: "Snow", minutes: 35 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSort
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
