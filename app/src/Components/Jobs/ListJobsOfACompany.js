import React from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';
import Cancel from 'material-ui-icons/Cancel';
import Done from 'material-ui-icons/Done';
import { withRouter , Redirect } from "react-router-dom";
const styles = {

}
const ListJobsOfACompany = (props) => {
    const { classes, jobList } = props;

    if (!jobList) {
        return null;
    }

    return(

        <div>
            <Paper>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id of job</TableCell>
                            <TableCell>Name of Job</TableCell>
                            <TableCell>ID of company</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>isAvailable</TableCell>
                            <TableCell>CreatedAt</TableCell>
                            <TableCell>UpdatedAt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.jobList ?
                            props.jobList.map((n) => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>{n.id}</TableCell>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell>{n.companyId}</TableCell>
                                    <TableCell>{n.description}</TableCell>
                                    <TableCell>{n.isAvailable ? <Done/> : <Cancel/> }</TableCell>
                                    <TableCell>{n.createdAt}</TableCell>
                                    <TableCell>{n.updatedAt}</TableCell>
                                </TableRow>
                            );
                        } ) : null}
                    </TableBody>
                </Table>
            </Paper>
        </div>

    )
};
export default withStyles(styles)(withRouter(ListJobsOfACompany));