import { AnimatedTestimonials } from './components/ui/animated-testimonials'

function App() {
  // Typescript code goes here, stuff the component needs to show something, like data or settings

  // This below is a function, code that can be run at a later time to return some value. In this case it returns the jsx of a component.
  function AnimatedTestimonialsDemo() {
    // This below is the data we will use to populate the testimonials component
    const testimonials = [
      {
        quote:
          "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: 'Sarah Chen',
        designation: 'Product Manager at TechFlow',
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: 'Michael Rodriguez',
        designation: 'CTO at InnovateSphere',
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: 'Emily Watson',
        designation: 'Operations Director at CloudScale',
        src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: 'James Kim',
        designation: 'Engineering Lead at DataPro',
        src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        quote:
          'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
        name: 'Lisa Thompson',
        designation: 'VP of Technology at FutureNet',
        src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]

    // This is where we return the jsx code coming from the AnimatedTestimonials component
    return <AnimatedTestimonials testimonials={testimonials} />
  }

  return (
    <>
      <div className="rounded-md m-2 px-4 py-2 bg-[#251111] text-white w-fit">
        <ul>
          <li className="my-2">
            1. A robot may not injure a human being or, through inaction, allow a human being to
            come to harm.
          </li>
          <li className="my-2">
            2. A robot must obey the orders given to it by human beings, except where such orders
            would conflict with the First Law.
          </li>
          <li className="my-2">
            3. A robot must protect its own existence as long as such protection does not conflict
            with the First or Second Law.
          </li>
        </ul>
      </div>
      <div className="border-2 border-blue-500">stuff above</div>
      {/* This is where we put the jsx code returned by the function, we tell the browser where to show it in the DOM */}
      {AnimatedTestimonialsDemo()}
      <div className="border-2 border-green-500">stuff below</div>
    </>
  )
}

export default App
