"use client"

import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import { LeftSide, RightSide } from './OnScroll';
import ShowcaseCard from '@/components/ShowcaseCard';
import { ShowcaseCardProps } from "@/components/ShowcaseCard";
import { projects } from '@/components/Showcase';



const getData = async () => {
  const res = await fetch("http://localhost:3000/api/events/get", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed!");

  }

  return res.json() as Promise<ShowcaseCardProps[]>;
}

type Props = {
  params:ShowcaseCardProps[]
}

//export default function Events() {
const Events = (): JSX.Element => {
//const Events = async ({params}:Props) => {
  const [data, setData] = useState<ShowcaseCardProps[]>([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        //uncomment when database has data 
        //const eventsData:EventsType[] = await getData();
        //setData(eventsData);
        //console.log('Data:', JSON.stringify(eventsData[0]));

        setData(projects);

        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  //RYAN this is how to call backend from front end
  //const getData = async () => {
    //to test ur data, type this link http://localhost:3000/api/projects/get inside ur browser. you will either get
    //empty array or some data.
    
    //for deployment
    //const res = await fetch(`http://localhost:3000/api/projects/get`, {
    
    //for production
    //const res = await fetch(`https://3dc-nextra-phi.vercel.app/api/projects/get`, {
    //  cache: "no-store",
    //}).then(
    //  response => response.json()
    //).then(data => {
    //  console.log('data ', data);
    //  setData(data);
    //});
  
  //};

  
//lg:px-40 lg:py-40 md:px-10

  return (
    <div className="snap-center flex-shrink-0 mx-auto  md:px-10 lg:px-40 lg:py-40 xl:px-30 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-10 ">
        <div className="space-y-4 ">


          <LeftSide>
          <h2 className="font-bold">Events</h2>
          </LeftSide>
          
          <h3>Upcoming</h3>
          <p className="text-lg text-gray-600">
            Interested in hackathons, competitions, and other events? Stay up to
            date with events and find teammates here.
          </p>

          {/* <div className="event-list">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
              />
              
            ))}
          </div> */}

          {/* <div className="hidden md:flex">
            <img
              className="rounded-md object-cover"
              alt="feature image"
              src="/home/events.jpg"
              width="250"
              height="250"
            />
          </div> */}
          <div className="flex">
            <a href="/events" className="">
              Show More
            </a>
          </div>
        </div>

        <RightSide>
          <div className="lg:flex space-y-4 ">
          {/* <img

            className="rounded-md object-cover"
            alt="feature image"
            src="/home/events.jpg"
          /> 
          */}
            <div className=" event-list px-4 py-4 flex gap-4 overflow-auto">
              {data.map( ( event:ShowcaseCardProps, index ) => (
                
                // <div>{event.title},{event.date}</div>
                
              <ShowcaseCard 
                key = {index} 
                {...event}
                />


               ))
              }
            </div>
          </div>
        </RightSide>

        {/* <div className="flex ">
          <a href="/events " className="">
            Show More
          </a>
        </div> */}

      </div>
    </div>
  );
}

export default Events;