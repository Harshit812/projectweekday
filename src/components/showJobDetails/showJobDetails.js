import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { fetchWeekDayJobsDataAsync } from '../../redux/actions/action';
import { JobCard } from '../jobCard/jobCard';
import { useSelector } from 'react-redux';

const ShowJobDetails = ({ fetchData, jdList, totalCount, loading, error }) => {
    
    useEffect(() => {
        fetchData();
    },[fetchData]);

    const filters = useSelector((state) => state.filters);
    const jobDetails = useSelector((state) => state.jdList);

    const filteredJobs = jobDetails.filter((job) => {
        return (
            (filters.jobRole ? job.jobRole === filters.jobRole : true) &&
            (filters.numberOfEmployees ? job.numberOfEmployees >= filters.numberOfEmployees : true) &&
            (filters.experience ? job.experience <= filters.experience : true) &&
            (filters.remote ? job.remote === filters.remote : true) &&
            (filters.salary ? (job.minSalary >= filters.salary) : true)
        );
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Grid container spacing={6}>
            {filteredJobs.map((job) => (
                <Grid item xs={12} sm={6} lg={4} key={job.jdUid}>
                    <JobCard
                        companyName={job.companyName}
                        roleTitle={job.jobRole}
                        location={job.location}
                        minSalary={job.minJdSalary}
                        maxSalary={job.maxJdSalary}
                        minExp={job.minExp}
                        aboutCompany={job.jobDetailsFromCompany}
                        currencyCode={job.salaryCurrencyCode}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

const mapStateToProps = state => ({
    jdList: state.jdList,
    totalCount: state.totalCount,
    filters: state.filter,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchWeekDayJobsDataAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowJobDetails);
