import { ButtonComponent } from '@components/Button';

function App() {

	return (
		<>
			<ButtonComponent text="Primary Button" onClick={() => console.log("hi")}></ButtonComponent>
			<ButtonComponent text="Primary Button Disabled" disabled={true}></ButtonComponent>
			<ButtonComponent text="Secondary Button" variant="secondary"></ButtonComponent>
			<ButtonComponent text="Secondary Button Disabled" disabled={true} variant="secondary"></ButtonComponent>
			<ButtonComponent text="Link Button" variant="link" href=""></ButtonComponent>
			<ButtonComponent text="Link Button Disabled" disabled={true} variant="link" href="www.google.com"></ButtonComponent>
		</>
	);
}

export default App;
