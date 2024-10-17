import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/wandabi-gs',
	},
	{
			id: 2,
			icon: <FiGithub />,
			url: 'https://github.com/gideon-simiyu',
		},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://x.com/gg_wandabi',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/gideon-simiyu-72525625a/',
	}
];

const AppFooter = () => {
	return (
		<div className="w-screen mx-auto mb-20 lg:mb-0">
			<div className="py-8 mt-20 border-t-2 border-primary">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-gradient mb-5">
						Find Me On
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-primary cursor-pointer rounded-lg bg-secondary/20 hover:-translate-y-2 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
