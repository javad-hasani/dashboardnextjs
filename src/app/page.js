import Sidebar from "../../components/Sidebar/sidebar";
import Dashboard from "../../pages/index/index.jsx";
import './globals.css'


export default function Home() {
  return (
    
    <div style={{ display: "flex" }}>
      <Sidebar style={{ marginRight: "auto" }} />
      <Dashboard style={{ marginLeft: "auto" }} />

    </div>
      
  );
}
