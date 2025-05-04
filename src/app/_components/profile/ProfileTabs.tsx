"use client"
import { TabItem, Tabs } from 'flowbite-react'
import React from 'react'
import { GoBookmark } from 'react-icons/go'
import { IoGridOutline } from 'react-icons/io5'
import ProfileCard from './ProfileCard'
import { LiaUserTagSolid } from 'react-icons/lia'

const ProfileTabs = () => {
  return (
    <div>
        <Tabs aria-label="Default tabs" variant="underline" className="mt-8 flex justify-center tabsItems">
      <TabItem active title="Posts" icon={IoGridOutline}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {[...Array(10)].map((_, i) => {
          return (
            <ProfileCard key={i}/>
          )
        })}
        </div>
      </TabItem>
      <TabItem title="Saved" icon={GoBookmark}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
      <TabItem title="Tagged" icon={LiaUserTagSolid}>
        This is <span className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </TabItem>
    </Tabs>
    </div>
  )
}

export default ProfileTabs