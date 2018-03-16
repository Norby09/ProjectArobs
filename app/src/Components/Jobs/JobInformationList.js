import React , {Component} from 'react';
import 'typeface-roboto';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display:'block',
    },
    inlineDiv : {

        margin:'0 auto',
    },
    middleButton : {
        marginLeft:'46%',
    }
};

class JobInformationList extends Component {
    render(){
        console.log(this.props.listOfDetails);
        return (
            <div style={styles.inlineDiv}>
                <div >
                    <p>Job Info</p>
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>CompanyId</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.listOfDetails ?
                                    <TableRow>
                                        <TableCell>{this.props.listOfDetails.id}</TableCell>
                                        <TableCell>{this.props.listOfDetails.companyId}</TableCell>
                                        <TableCell>{this.props.listOfDetails.name}</TableCell>
                                        <TableCell>{this.props.listOfDetails.description}</TableCell>
                                        <TableCell>{this.props.listOfDetails.createdAt}</TableCell>
                                        <TableCell>{this.props.listOfDetails.updatedAt}</TableCell>
                                    </TableRow>
                                 : null

                                }


                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div >
                    <p>Job BENEFIT INFO LIST</p>
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>JobId</TableCell>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.listOfDetails ?
                                    this.props.listOfDetails.jobBenefitInfoList.map((n) => (
                                    <TableRow>
                                        <TableCell>{n.jobId}</TableCell>
                                        <TableCell>{n.id}</TableCell>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell>{n.createdAt}</TableCell>
                                        <TableCell>{n.updatedAt}</TableCell>
                                    </TableRow>
                                    )) : null

                                }


                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div >
                    <p>Job Requirement Info List</p>
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Job Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.listOfDetails ?
                                    this.props.listOfDetails.jobRequirementInfoList.map((n) => (
                                        <TableRow>
                                            <TableCell>{n.id}</TableCell>
                                            <TableCell>{n.jobId}</TableCell>
                                            <TableCell>{n.name}</TableCell>
                                            <TableCell>{n.createdAt}</TableCell>
                                            <TableCell>{n.updatedAt}</TableCell>
                                        </TableRow>
                                    )) : null

                                }


                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div >
                    <p>Job Skill Info List</p>
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Job Id</TableCell>
                                    <TableCell>Skill Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.listOfDetails ?
                                    this.props.listOfDetails.jobSkillInfoList.map((n) => (
                                        <TableRow>
                                            <TableCell>{n.id}</TableCell>
                                            <TableCell>{n.jobId}</TableCell>
                                            <TableCell>{n.skillId}</TableCell>
                                            <TableCell>{n.skillInfo.name}</TableCell>
                                            <TableCell>{n.rating}</TableCell>
                                            <TableCell>{n.createdAt}</TableCell>
                                            <TableCell>{n.updatedAt}</TableCell>
                                        </TableRow>
                                    )) : null

                                }


                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>

        );
    }

}

export default JobInformationList;