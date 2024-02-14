import React, { useEffect, useState } from "react";
import { AnchorProps } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";

export interface ShowcaseCardProps {
    title: string;
    description: string;
    image_link: string;
    href: string;
    date: string;
    project_cat: string;
  }


const ShowcaseCard: React.FC<ShowcaseCardProps> = (props) => {
    const { title, description, image_link, href, date, project_cat } = props;

      var shortDesc = '';

      if (description.length < 120) {
        shortDesc = description;
      } else {
        shortDesc = description.slice(0, 90) + '...';
      }
    
      var shortTitle = '';
    
      if (title.length < 36) {
        shortTitle = title;
      } else {
        shortTitle = title.slice(0, 36) + '...';
      }
  
    return (
      <a href={href}>
        <div className="bg-white border border-gray-200 hover:-translate-y-1 overflow-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-60 h-full">
          <img
            className="rounded-t-lg object-cover h-40 w-60 aspect-video"
            src={props.image_link}
            alt=""
          />
          <p className="px-5 pt-3 text-xs text-gray-400 font-bold">{props.project_cat}</p>
          <h5 className="px-5 pt-3 text-xl font-bold tracking-tight text-gray-900">
            {shortTitle}
            {/* {title} */}
          </h5>
          <div className="px-5 py-3">
            <div className="flex">
              <MdDateRange/>
              <p className="px-2 text-sm">{date}</p>
            </div>
            
          </div>
          <p className="px-5 pb-5 text-gray-700">
            {shortDesc}
            {/* {description} */}
            </p>
        </div>
      </a>
    );
  };
export default ShowcaseCard;