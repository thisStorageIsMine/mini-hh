import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IExperience } from "../interfaces"


export interface IExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    experience: IExperience
}

const Experience = ({ experience, className, ...props }: IExperienceProps) => {
    return (
        <p className={['text-lg text-slate-800', className].join(' ')} {...props}>
            Требуемый опыт: {experience.name}
        </p>
    )
}

export { Experience }