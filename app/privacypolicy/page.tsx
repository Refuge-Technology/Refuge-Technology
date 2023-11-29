import Title from "@/components/title";

export default function PrivacyPolicy() {
	return (
		<>
			<div className="pt-5 max-sm:py-3 w-full flex flex-col justify-center items-center grow">
				<Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
					Privacy Policy
				</Title>
				<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5">
					Welcome to Shelter, a humanitarian web application dedicated
					to connecting hosts offering their homes as shelter with
					refugees and displaced people around the world. This Privacy
					Policy outlines how we collect, use, disclose, and protect
					your information when you use our website and services. By
					accessing or using Shelter, you agree to the terms outlined
					in this Privacy Policy.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center grow">
				<h1 className="text-5xlt racking-tight text-seconday border-none sm:text-4xl">
					Information We Collect
				</h1>
				<h2 className="text-secondary border-none">
					<span className="text-center">
						{" "}
						User-Provided Information{" "}
					</span>{" "}
					We collect information that you voluntarily provide to us
					when using Shelter, including:
				</h2>
				<ul className="border-none text-secondary py-3">
					<li>
						{" "}
						Contact Information: Name, email address, phone number.{" "}
					</li>
					<li>
						{" "}
						Property and Home Information: Details about the
						property offered for shelter.{" "}
					</li>
					<li>
						{" "}
						Identity Information: Documents for verification
						purposes.{" "}
					</li>
				</ul>
				<h2 className="text-secondary border-none">
					<span className="text-center">
						{" "}
						Automatically Collected Information:{" "}
					</span>{" "}
					We may also collect certain information automatically,
					including:
				</h2>
				<ul className="border-none text-secondary">
					<li>
						{" "}
						Log Data: Information about your interactions with the
						website (e.g., IP address, browser type, pages visited).
					</li>
				</ul>
			</div>
		</>
	);
}
