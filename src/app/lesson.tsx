"use client";

import { useState } from "react";

type LessonProps = {
  title: String;
  points: String;
}

type LikeState = 'unset' | 'Liked' | 'Disliked';

export function Lesson({title, points}: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>('unset');
    const setLike = () => setLikeState('Liked');
    return (
        <div>
                <h2>{title}</h2> 
                <button onClick={setLike}>
                    {likeState == 'unset' ? 'Like' : likeState}
                </button>
            <p>{points}</p>
        </div>
    )
}