import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Salary } from "../interfaces";

export interface ISalarySectionInterface extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    salary: Salary | null | undefined
}

export const SalarySection = ({ salary, className, ...props }: ISalarySectionInterface) => {
    let salaryText: string;

    if (!salary) {
        salaryText = `Зарплата не указана 😔`
    } else if (salary.to && salary.from) {
        salaryText = `От ${makeNumberClean(salary.from)} до ${makeNumberClean(salary.to)} ${salary?.currency ? salary.currency : "₽"}`
    }
    else {
        salaryText = `${salary.to ? makeNumberClean(salary.to) : makeNumberClean(salary.from as number)} ${salary?.currency ? salary.currency : "₽"}`
    }


    return (
        <h4 className={['text-xl tracking-wide', className].join(" ")} {...props}>
            {salaryText}
        </h4>
    )
}

function makeNumberClean(n: number) {
    return new Intl.NumberFormat('ru').format(n)
}