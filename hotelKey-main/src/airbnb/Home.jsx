import MappingOfCards from "./card/MappingOfCards";
import MobileBottomNavbar from "./navbar/MobileBottomNavbar";
const Home = () => {
	return (
		<>
			<MappingOfCards />
			<div className="sm:hidden">
				<MobileBottomNavbar />
			</div>
		</>
	);
};
export default Home;
