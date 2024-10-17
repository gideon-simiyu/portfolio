import { FiMail, FiPhoneCall } from "react-icons/fi"


function Contacts() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-start items-center">
        <span className="p-2 text-secondary bg-primary/20 rounded">
        <FiMail /> 
        </span>
        <a href="mailto:gwandabi23@gmail.com" className="ms-3 hover:text-primary">gwandabi23@gmail.com</a>
      </div>
      <div className="flex justify-start items-center">
        <span className="p-2 text-secondary bg-primary/20 rounded">
        <FiPhoneCall /> 
        </span>
        <a href="tel:+254712881672" className="ms-3 hover:text-primary">+(254) 712881672</a>
      </div>
    </div>
  )
}

export default Contacts