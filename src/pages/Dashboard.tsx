import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export const Dashboard = () => {
  return (
    <div className="flex flex-col m-10">
      <Header />
      <Search />
      <Card />
    </div>
  );
};
