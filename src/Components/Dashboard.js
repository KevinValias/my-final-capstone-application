import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <Container maxWidth="lg" className="car-container">
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.regions.map((region, id) => (
              <TableRow key={region.id}>
                <TableCell>
                  <Link to={`/region/${region.id}`}>{region["name"]}</Link>
                </TableCell>
                <TableCell>{region["description"]}</TableCell>
                <TableCell>{region["region"]}</TableCell>

                <TableCell>{region["action"]}</TableCell>
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeRegion(id)}
                    style={{ color: "red" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Dashboard;
