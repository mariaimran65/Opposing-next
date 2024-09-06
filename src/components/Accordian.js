import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react';
import plus from '../../public/assets/plus.png';
import minus from '../../public/assets/minus.png';
import NextImage from './NextImage';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Icon({ open }) {
  return !open ? (
    <NextImage alt="plus" className="min-w-[2rem] h-[2rem]" src={plus} />
  ) : (
    <NextImage className="min-w-[2rem] h-[2rem]" alt="minus" src={minus} />
  );
}

function Accordions({ open, onClick, heading, body, from, isLast }) {
  return (
    <Accordion
      icon={<Icon id={1} open={open} />}
      open={open}
      className={classNames(
        'text-center cstm-accordian',
        from === 'nutshell'
          ? 'border-b-[1px] border-[#F1F1F1]'
          : isLast
          ? 'px-4'
          : 'border-b-[1px] border-[#F1F1F1] px-4'
      )}
    >
      <AccordionHeader
        onClick={onClick}
        className={classNames(
          'text-left border-none',
          'text-[18px] font-medium text-black'
        )}
      >
        {heading}
      </AccordionHeader>
      <AccordionBody
        className={classNames(
          'text-left',
          from === 'nutshell'
            ? 'text-[18px] text-[#212529] font-normal leading-[33px] '
            : 'text-[18px] text-black font-normal leading-[33px]'
        )}
      >
        {body}
      </AccordionBody>
    </Accordion>
  );
}
export default Accordions;
