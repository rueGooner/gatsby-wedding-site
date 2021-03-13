import React from "react"
import Layout from "../components/Layout"
import Hero from '../components/Hero';

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-center items-center text-primary">
        <Hero />
      </main>
    </Layout>
  )
}
