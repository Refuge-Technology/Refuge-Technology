import { Footer } from "@/components/footer";
import Title from "@/components/title";

export default function PrivacyPolicy() {
	return (
		<>
			<div className="pt-20 w-full flex flex-col items-center grow">
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
				<h1 className="mt-2 text-3xl text-secondary sm:text-2xl pb-5">
					Information We Collect:
				</h1>
				<ol className="max-sm:px-5">
					<li className="py-1 text-md"> <strong> 1. User-Provided Information: </strong></li>
					<p className="max-w-prose"> We collect information that you voluntarily provide to us when using Shelter, including: </p>
				</ol>
				<ol className="text-sm max-sm:px-5">
					<li className="black"> Contact Information: Name, email address, phone number</li>
					<li> Property and Home Information: Details about the property offered for shelter.</li>
					<li> Identity Information: Documents for verification purposes.</li>
				</ol>
				<ol className="px-5">
					<li className="py-1 text-md"> <strong> 2. Automatically Collected Information: </strong></li>
				<p className=""> We collect information that you voluntarily provide to us when using Shelter, including: </p>
				</ol>
				<ol className="text-sm max-sm:px-5">
					<li className="black max-w-prose"> Log Data: Information about your interactions with the website e.g., IP address, browser type, pages visited. </li>
				</ol>
				<h1 className="mt-2 text-3xl text-secondary max-sm:px-5 sm:text-2xl pb-5">
					How We Use Your Information
				</h1>
				<ol className="max-sm:px-5 pb-10">
					<li className="py-1 text-md"> <strong> 1. Matching Hosts and Refugees:</strong></li>
					<p className="max-w-prose">  Facilitating the connection between hosts and registered refugees.</p>
					<li className="py-1 text-md"> <strong> 2. Verification:</strong></li>
					<p className="max-w-prose">  Verifying the identity and suitability of hosts and refugees.</p>
					<li className="py-1 text-md"> <strong> 3. Communication:</strong></li>
					<p className="max-w-prose">  Sending relevant updates, notifications, and information.</p>
					<li className="py-1 text-md"> <strong> 4. Legal Compliance:</strong></li>
					<p className="max-w-prose">  Complying with applicable laws and regulations.</p>
				</ol>
			</div>
			<Footer />
		</>
	);
}
