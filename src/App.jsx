/* eslint-disable no-unused-vars */
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobloader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
  const deleteJob = async (id) => {
    // console.log(id);
    const res = await fetch(`/api/jobs/${id}`,
      {
        method: 'DELETE'
      });
    return;
  }

  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newJob) });
    return res;
  }

  const updateJob = async (job) => {
    // console.log(updatedJob);
    const res = await fetch(`/api/jobs/${job.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(job) });
    return res;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path="/jobs/:id" element={
          <JobPage deleteJob={deleteJob} />
        } loader={jobloader} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" loader={jobloader}
          element={<EditJobPage updateJobSubmit={updateJob} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
