import Layout from './components/Layout';
import './App.css'

function App() {


  //TODO:
  // D3js chart for each
  // maybe impl the skillcard comp

  return (
    <>    
        <Layout>
          <div className="flex flex-col text-center">
            <p className="text-black opacity-75 text-xl my-4">
              Welcome to my TypeScript-based Next.js app!
            </p>
            <hr />
            <p className="text-red-700 my-4">
              This is an example of using Tailwind CSS in Next.js.
            </p>
          </div>
        </Layout>
     
    </>
  );
}

export default App
