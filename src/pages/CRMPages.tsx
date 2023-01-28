import { Dashboard } from "../components/Dashboard"
import { SlideBar } from "../components/SlideBar"


export const CRMPages = () => {


  return (
    <section className="flex h-screen">
      <SlideBar />
      <Dashboard />
    </section>
  )
}