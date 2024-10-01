import './page.css';
import Image from 'next/image';
import {
  GalleryItem,
  galleryItems,
} from '@app/model/gallery/fitness-instructor';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';

const GridCardLinkItem = ({
  text,
  className,
  bgImageSrc,
  href
}: {
  text: string;
  bgImageSrc: string;
  href: string;
  className?: string;
}) => (
  <a
    className={`flex-1 aspect-[4/3] relative flex justify-center ${className}`}
    href={href}
  >
    <div className={`absolute-full bg-cover ${bgImageSrc}`}></div>
    <div className="absolute-full h-full opacity-0 hover:opacity-50 bg-cyan-600"></div>
    <div className="flex align-middle justify-center flex-col gap-5 h-full w-full max-w-[490px]">
      <h3 className="z-10 uppercase text-3xl tracking-[.3em]">{text}</h3>
      <div className="mx-auto text-cyan-600 hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className='absolute transition-all duration-300 hover:text-white hover:translate-x-2' viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
    </div>
  </a>
);

const AchievementItem = ({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) => (
  <li>
    <h4 className="text-2xl md:text-4xl mb-2 md:mb-5 text-center text-white">{title}</h4>
    <div className="mb-2 md:mb-5 bg-white h-px"></div>
    <p className="text-md md:text-2xl text-center text-white">{tagline}</p>
  </li>
);

const GalleryItem = ({
  item: { title, tagline, imgSrc, id },
}: {
  item: GalleryItem;
}) => (
  <li className="aspect-video relative">
    <Image src={imgSrc} alt={title} fill />
    <div className="absolute-full opacity-0 hover:opacity-70 bg-white p-8 flex flex-col justify-between text-black">
      <div className="text-center">
        <h4 className="text-2xl pt-4 pb-2">{title}</h4>
        <p className="font-open-sans-condensed">{tagline}</p>
      </div>
      <div className="flex justify-between">
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/like.svg"
            height={24}
            width={24}
            alt="like image"
          />
        </a>
        <a href="/#" className="cursor-pointer">
          <Image
            src="/common/share.svg"
            height={24}
            width={24}
            alt="share image"
          />
        </a>
      </div>
    </div>
  </li>
);

export default async function Home() {
  return (
    <div>
      <div
        className="text-center min-h-screen bg-[url('/home/hero-car-1.jpg')] parallax-background bg-[center_top_1rem]"
        data-testid={testIds.HOME_PAGE.HEADER}
      >
        <section className="py-[355px]">
          <h1 className="tracking-widest">Animals of our World</h1>
          <div className="pt-4">
            <div className="text-xl">
              Siem Reap’s only physical sanctuary for rescued animals of all species
            </div>
          </div>
          <div className="pt-10 flex gap-8 justify-center">
            <a
              className="btn-secondary text-lg px-7"
              href="/visit-us"
              data-testid={testIds.HOME_PAGE.BOOK_CLASS_CTA}
            >
              Visit us
            </a>
            <a
              className="btn-main text-lg px-7"
              href="/donations"
              data-testid={testIds.HOME_PAGE.BOOK_PLAN_CTA}
            >
              Donations
            </a>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row py-8 md:pb-0 md:pt-1 bg-gray-c1 cursor-pointer">
          <GridCardLinkItem
            href="/sanctuary"
            text="Our Animals"
            className="sm:justify-end"
            bgImageSrc="bg-[url('/home/animals.jpg')]"
          />
          <GridCardLinkItem
            href="/team"
            text="Our Team"
            className="sm:justify-start"
            bgImageSrc="bg-[url('/home/team.jpg')]"
          />
        </section>
      </div>
      <ScrollIntoView hashName="#about" offset="-90px" />
      <div className="min-h-screen bg-[url('/home/we.jpg')] parallax-background m-0 md:m-16 px-2 md:px-0">
        <div className="max-w-full-content mx-auto box-content pt-2">
          <h2 className="uppercase text-4xl md:text-6xl leading-tight py-7">
            Welcome to Animals of Our World
          </h2>
          <h3 className='text-2xl md:text-4xl py-7'>
            a compassionate and impactful UK-registered charity committed to ending and preventing animal suffering.
          </h3>
          <div className="max-w-[500px] md:pt-10 pb-2">
            <section className="font-open-sans-condensed text-base text-stone-300 tracking-wider">
              <p className="py-3">
                {`We are the only physical sanctuary in Siem Reap, which is predominantly a forever home for disabled rescued animals who can no longer live independetly. We are currently prioritizing the rescue and rehabilitation of emergency animal medical cases only.
                `}
              </p>
              <p className="py-3">
                {`We are a non-speciesist rescue and vegan organization that works tirelessly to make a difference in the lives of animals in need.`}
              </p>
              <p className="py-3">
                {`Our primary focus is on de-sexing and rehabilitating animals in distress. Through our community outreach program, we provide free medical treatment and animal care education to impoverished Cambodian families, ensuring that sick and injured animals receive the care they deserve.`}
              </p>
              <p className="py-3">
                {`By supporting our non-profit organization, you become an integral part of the change we strive to achieve. Your generous donations directly contribute to the operation of our essential rehabilitation base and animal sanctuary. Moreover, your support enables us to rescue and rehabilitate neglected, abandoned, and abused stray animals throughout Siem Reap and other regions of Cambodia whenever we can.`}
              </p>
              <p className="py-3">
                {`But we cannot do this alone—we need you! Join us in our mission to create a brighter future for animals in Cambodia and beyond. Together, we can make a profound impact on the lives of these vulnerable creatures.`}
              </p>
            </section>
          </div>
        </div>
        <section className="bg-[url('/home/numbers-bg.svg')] bg-center bg-cover">
          <div className="max-w-full-content px-4 mx-auto text-black">
            <h2 className="title pt-12 md:pt-24 pb-20 text-3xl md:text-6xl text-center text-white">
              Our numbers
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 pb-20 px-2 mb-8 md:mb-0">
              <AchievementItem
                title="5"
                tagline="5 Years of intense work"
              />
              <AchievementItem
                title="150"
                tagline="150 animals currently rescued"
              />
              <AchievementItem
                title="40"
                tagline="40 adoptions archieved this year"
              />
              <AchievementItem
                title="8"
                tagline="8 team members"
              />
            </ul>
          </div>
        </section>
        <section className="bg-gray-c2 rounded-md md:rounded-none">
          <div className="max-w-full-content px-4 mx-auto py-10 md:py-20 flex flex-col gap-10 items-start md:items-center">
            <h3 className="text-2xl md:text-4xl uppercase tracking-[.4em] pt-7 text-start">
              Your help can save lives
            </h3>
            <a
              className="btn-secondary px-10 text-lg px-7"
              href="/donations"
            >
              Donate now
            </a>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hidden">
          {galleryItems.map((item) => (
            <GalleryItem item={item} key={item.id} />
          ))}
        </section>
      </div>
      <ScrollIntoView hashName="#our-world" offset="-90px" />
      <div className="text-center py-24 bg-[url('/home/our-world-d.jpg')] parallax-background">
        <div className="mx-auto max-w-4xl px-2">
          <h2 className="title tracking-widest text-4xl md:text-6xl">Our World</h2>
          <div className="pt-8 font-open-sans-condensed text-lg text-start text-stone-300 flex flex-col gap-y-4 mb-4">
            <h3 className='font-bold text-2xl pb-2 pl-2 md:pl-0'>Our Story</h3>
            <p>{'Our journey as an English couple exploring South East Asia began with the intention of enjoying a year or two of travel and relaxation. However, fate had other plans for us when we arrived in Bangkok and discovered the plight of stray animals. Our days and evenings quickly transformed into a mission of feeding and forming connections with these abandoned creatures.'}</p>
            <p>{'Over the course of four months, we embarked on a mission to visit every rescue shelter in each destination we encountered. Armed with the basic knowledge we had gained along the way, we started providing medical care to the stray animals we came across. It was during our time in Cambodia that we discovered four orphaned kittens, which compelled us to stay until we could find them loving forever homes.'}</p>
            <p>{'Within a few short weeks, the House Of Strays sanctuary came into existence. We made a life-altering decision to dedicate ourselves fully to the establishment of a rehabilitation center and shelter, with the goal of alleviating as much suffering as possible. '}</p>
            <p><strong>{'Today, several years later, our mission remains unwavering, and our shelter continues to serve as a vital temporary haven for those undergoing rehabilitation, as well as a permanent home for animals with special needs, and a temporary home for animals who have not yet found adoptive families.'}</strong></p>
          </div>
          <div className="pt-8 font-open-sans-condensed text-lg text-start text-stone-300 flex flex-col gap-y-4 mb-4">
            <h3 className='font-bold text-2xl pb-2 pl-2 md:pl-0'>Our Mission</h3>
            <p>{'Animals Of Our World defines who we are and drives our commitment to our cause.'}</p>
            <p>{'Through our community outreach program, we extend our reach to every corner of Cambodia. Distance is not a limitation for us. If an animal is suffering even ten hours away from our shelter, House Of Strays, we utilize our extensive network to locate the nearest rescuer or driver who can try to bring the animal to safety, to the best of our ability.'}</p>
            <p>{'At Animals Of Our World, our mission is to tackle the root causes of animal suffering by implementing widespread vaccination and de-sexing programs to control and reduce the stray population in Cambodia. As our financial support increases, we aim to expand our community outreach efforts, enabling us to conduct de-sexing missions across the entire country. Our dedication extends beyond cats and dogs; we strive to assist every animal in need.'}</p>
            <p>{'House Of Strays serves as the sanctuary and rehabilitation base for Animals Of Our World, providing a safe haven for over 100 rescued animals. Successful adoptions play a vital role in creating space for more animals and enabling us to continue our mission.'}</p>
            <p>{'However, it is equally important to secure the future of our base, ensuring its existence as a forever home for animals who will live out their lives under our care. This includes those who may never be adopted or those with additional daily needs. While not all of our rescues are available for adoption, we have numerous cats and dogs eagerly awaiting the opportunity to find a loving home.'}</p>
          </div>
          <div className="pt-8 font-open-sans-condensed text-lg text-start text-stone-300 flex flex-col gap-y-4 mb-4">
            <h3 className='font-bold text-2xl pb-2 pl-2 md:pl-0'>Our Features</h3>
            <p>{'Animals Of Our World has been featured in several interviews, articles, and events which you’ll find linked below.'}</p>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <p><strong>{'Charity Commission for England and Wales'}</strong></p>
                <a className='text-cyan-600' href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5176267/accounts-and-annual-returns" target="_blank" rel="noopener noreferrer">ANIMALS OF OUR WORLD, Charity number 1197372</a>
              </li>
              <li>
                <p><strong>{'The Romford Recorder (UK) – May 2022'}</strong></p>
                <a className='text-cyan-600' href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5176267/accounts-and-annual-returns" target="_blank" rel="noopener noreferrer">6,064 miles away and dedicated’: Pair swapped Romford for Cambodia to run animal sanctuary</a>
              </li>
            </ul>
          </div>

          <section className="bg-gray-c2 rounded-md md:rounded-none md:mt-16">
          <div className="max-w-full-content px-4 mx-auto py-10 md:py-20 flex flex-col gap-10 items-start md:items-center">
            <h3 className="text-2xl md:text-4xl uppercase tracking-[.4em] pt-7 text-start">
            Experience our dedication up close
            </h3>
            <a
              className="btn-secondary px-10 text-lg px-7"
              href="/visit-us"
            >
              Visit us
            </a>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
