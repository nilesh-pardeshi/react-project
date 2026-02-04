import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {

    let courses= props.courses;
    let category= props.category;

    const[likedCourses, setLikedCourses]= useState([]);
  function getCourses() {
    if(category=="All"){
      //all below data will pass when category will all, else only selected category data will pass
        let allCourses = [];
    Object.values(courses || {}).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
    }else{

        //pass specific category data or array
        return courses[category];
    }
    
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      ))}
    </div>
  );
};

export default Cards;
