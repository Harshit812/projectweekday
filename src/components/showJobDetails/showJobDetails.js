import React, { useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeekDayJobsDataAsync } from '../../redux/actions/action';
import { JobCard } from '../jobCard/jobCard';
import useInfiniteScroll from 'react-infinite-scroll-hook'; // Importing the default export

const LIMIT = 10; // pagination requirements

const ShowJobDetails = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const filters = useSelector((state) => state.filters);
    const jobDetails = useSelector((state) => state.jdList);
    const totalCount = useSelector((state) => state.totalCount);
    const [allJobs, setAllJobs] = useState(jobDetails);

    useEffect(() => {
        fetchData(0); // Initial fetch with offset 0
    }, []);

    const fetchData = (offset) => {
        console.log('Fetching data with offset:', offset);
        dispatch(fetchWeekDayJobsDataAsync(LIMIT, offset));
        setAllJobs(prev=>[...prev, ...jobDetails]);
    };

    const filteredJobs = useMemo(() => {
        return allJobs.filter((job) => {
            return (
                (filters.jobRole ? job.jobRole === filters.jobRole : true) &&
                (filters.experience ? job.minExp <= filters.experience : true) &&
                // (filters.experience ? job.remote === filters.remote : true) &&
                // (filters.experience ? job.numberOfEmployees <= filters.numberOfEmployees : true) &&
                (filters.salary ? job.maxJdSalary >= filters.salary : true)
            );
        });
    }, [jobDetails, filters]);
    //commented some filters as they are not part of API

    const [infiniteRef] = useInfiniteScroll({
        loading: true, //set loading to false for infinite scrolling
        hasNextPage: true,
        onLoadMore: () => {
            const newOffset = LIMIT * page;
            fetchData(newOffset);
            setPage(page+1);
            
        },
        disabled: totalCount===allJobs.length
    });

    return (
        <div ref={infiniteRef} style={{ overflow: 'auto', maxHeight: '80vh' }}>
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
        </div>
    );
};

export default ShowJobDetails;
