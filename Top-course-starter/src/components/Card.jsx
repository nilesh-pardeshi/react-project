import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course=props.course;
    let likedCourses= props.likedCourses;
    let setLikedCourses= props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada hai
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("like removed");
        }
        else{
            //pehle se like nhi hai ye course
            //insert karana hai ye course like courses me
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                //non empty pehle se
                setLikedCourses((prev)=>[...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className="w-[300px] bg-[#2a2f4f] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <div className='relative'>
            <img src={course.image.url} className="w-full h-[160px] object-cover"
    alt={course.title}></img>
            <div className="w-10 h-10 bg-white rounded-full absolute right-3 bottom-[-20px] grid place-items-center shadow-md">
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                }
            </button>
            </div>
        </div>
        
        <div className="p-4 pt-6">
            <p className="text-white font-semibold text-lg">
                {course.title}
            </p>
            <p className="mt-2 text-sm text-gray-300">
                {course.description.length > 100
                ? course.description.substr(0, 100) + "..."
                : course.description}
            </p>
        </div>

        
    </div>
  )
}

export default Card