import React, { useEffect, useState, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeekDayJobsDataAsync } from '../../redux/actions/action';
import { JobCard } from '../jobCard/jobCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const LIMIT = 10; // Adjust LIMIT based on your pagination requirements

const ShowJobDetails = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const jobDetails = useSelector((state) => state.jdList);

    useEffect(() => {
        fetchData(LIMIT, 0); // Initial fetch with offset 0
    }, []);

    const fetchData = (limit, offset) => {
        dispatch(fetchWeekDayJobsDataAsync(limit, offset));
    };

    const filteredJobs = useMemo(() => {
        return jobDetails.filter((job) => {
            return (
                (filters.jobRole ? job.jobRole === filters.jobRole : true) &&
                (filters.numberOfEmployees ? job.numberOfEmployees <= filters.numberOfEmployees : true) &&
                (filters.experience ? job.minExp <= filters.experience : true) &&
                // (filters.remote ? job.remote === filters.remote : true) &&
                (filters.salary ? job.maxJdSalary >= filters.salary : true)
            );
        });
    }, [jobDetails, filters]); //remote is commented : no data from API

    const fetchMoreData = () => {
        const newOffset = page * LIMIT;
        setPage(page + 1);
        fetchData(LIMIT, newOffset);
    };

    return (
        <InfiniteScroll
            dataLength={filteredJobs.length}
            next={fetchMoreData}
            hasMore={true} // Assuming there's always more data to load
            loader={<h4>Loading...</h4>}
        >
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
                            logoUrl={job.logoUrl}
                        />
                    </Grid>
                ))}
            </Grid>
        </InfiniteScroll>
    );
};

export default ShowJobDetails;
