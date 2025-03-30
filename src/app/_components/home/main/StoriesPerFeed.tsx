"use client";


import Stories from "react-insta-stories";


export default function StoriesPerFeed() {
  const stories = [
    {
      type: "image",
      duration: 6000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
      
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
      duration: 28000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
    {
      type: "image",
      duration: 6000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
      duration: 10000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4",
      duration: 10000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },

    {
      type: "video",
      duration: 6000,
      url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
    {
      duration: 7000,
      type: "image",
      url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: "16px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Stories
        width="400px"
        height={500}
        currentIndex={0}
        keyboardNavigation
        stories={stories}
      />
    </div>
  );
}
