import Card from "./Card";

export default function Home() {
  return (
    <div className="app-container">
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <div className="header">
          <h1>User list</h1>
          <button>Add new</button>
        </div>
        <div className="body-container">
          <div className="titles">
            <span>Id</span>
            <span>Name</span>
            <span>Username</span>
            <span>Email</span>
            <span>City</span>
            <button> Edit </button>
            <button> Delete </button>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
