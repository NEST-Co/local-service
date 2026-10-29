export const biz = {
  name: 'Northfield Heating & Air',
  phone: '(555) 010-0123',
  phoneHref: '+15550100123',
  email: 'service@northfield-hvac.example',
  street: '14 Foundry Lane',
  city: 'Northfield',
  region: 'OH',
  zip: '45000',
  hours: 'Monday to Friday, 7 a.m. to 6 p.m. Emergency service 24 hours.',
  licence: 'Licence number shown here on a real site',
  areas: ['Northfield', 'Maple Heights', 'Cedar Falls', 'Brookside', 'Oak Hollow', 'Stonebridge'],
  zips: ['45000', '45001', '45002', '45003', '45004', '45005', '45006'],
};
export type Service = {
  slug: string; title: string; short: string; image: 'furnace' | 'ac' | 'maintenance' | 'install' | 'emergency';
  intro: string; signs: string[]; steps: string[]; faq: { q: string; a: string }[];
};
export const services: Service[] = [
  {
    slug: 'furnace-repair', title: 'Furnace repair', image: 'furnace',
    short: 'Fast diagnosis and repair when the heat stops working.',
    intro: 'A furnace that fails in January is an emergency. We find the problem first, tell you what it costs, then fix it only if you say yes.',
    signs: ['No heat, or heat that comes and goes', 'Banging, squealing or rattling from the furnace', 'The pilot light or igniter will not stay on', 'Higher heating bills with no change in how you use heat'],
    steps: ['You call or send a request. We give you an arrival window.', 'The technician checks the furnace and shows you what they found.', 'You get a written price before any repair starts.', 'We repair it and test it before we leave.'],
    faq: [
      { q: 'Should I repair or replace an old furnace?', a: 'If the repair costs more than about half the price of a new furnace and yours is over 15 years old, replacing it usually makes sense. We will give you both prices and let you decide.' },
      { q: 'Do you charge to look at it?', a: 'We charge a flat diagnostic fee. If you go ahead with the repair, it comes off the bill.' },
    ],
  },
  {
    slug: 'ac-repair', title: 'Air conditioning repair', image: 'ac',
    short: 'Same-day repairs for central air that is not cooling.',
    intro: 'When the house will not cool down, we want you back to normal as quickly as possible. Most repairs are done in one visit.',
    signs: ['Warm air from the vents', 'Water pooling near the indoor unit', 'The outdoor unit will not start or keeps shutting off', 'Strange smells when the air turns on'],
    steps: ['Call us or request a visit online.', 'We check airflow, refrigerant, electrical parts and the drain.', 'We explain the problem in plain language and give you a price.', 'We repair it and leave it running.'],
    faq: [
      { q: 'How long does a repair take?', a: 'Most take one to two hours. If we need a part we do not carry, we will tell you before we leave and book the return visit.' },
      { q: 'Is it worth fixing a unit that is 12 years old?', a: 'Often yes, if the problem is a small part. Ask us for both a repair price and a replacement price.' },
    ],
  },
  {
    slug: 'maintenance-plans', title: 'Maintenance plans', image: 'maintenance',
    short: 'Two tune-ups a year, so small problems stay small.',
    intro: 'A tune-up in spring for cooling and in fall for heating catches worn parts before they fail on the hottest or coldest day.',
    signs: ['You want fewer surprise breakdowns', 'Your system has not been checked in over a year', 'You are buying or selling a home', 'Your warranty requires yearly service'],
    steps: ['Pick a plan below.', 'We book two visits a year, at times that suit you.', 'Each visit follows a written checklist you can keep.', 'Plan members get priority scheduling.'],
    faq: [
      { q: 'What does a plan cost?', a: 'The Basic plan is $189 a year for two tune-ups. The Plus plan is $279 a year and adds priority scheduling and 10% off repairs. These prices are invented for this concept site.' },
      { q: 'Can I cancel?', a: 'Yes, at any time. We will refund the unused visits.' },
    ],
  },
  {
    slug: 'system-replacement', title: 'New system installation', image: 'install',
    short: 'A clear, written quote for a new furnace, air conditioner or both.',
    intro: 'Replacing a system is a big decision. We measure your home, explain the choices without pressure, and put the price in writing.',
    signs: ['The system is over 15 years old', 'Repairs are getting more frequent', 'Some rooms are too hot or too cold', 'You want lower energy bills'],
    steps: ['Free in-home measurement and quote.', 'We show you good, better and best options.', 'You choose, we schedule, usually within a week.', 'We install, test, and walk you through the controls.'],
    faq: [
      { q: 'Do you offer financing?', a: 'This concept site does not describe real financing terms. A real site would explain them here in plain language.' },
      { q: 'How long does installation take?', a: 'Most homes take one to two days.' },
    ],
  },
  {
    slug: 'emergency-service', title: 'Emergency service', image: 'emergency',
    short: 'A real person answers, any hour of any day.',
    intro: 'No heat on a freezing night, or a unit leaking through the ceiling, cannot wait until Monday. Call and we will send someone.',
    signs: ['No heat when it is below freezing', 'The smell of gas. Leave the house and call the gas company and 911 first', 'Water leaking from the system', 'Burning smell or smoke from the unit'],
    steps: ['Call the emergency line.', 'We tell you who is coming and when.', 'The technician makes the system safe first.', 'We then explain the repair and the price.'],
    faq: [
      { q: 'Is there an extra charge after hours?', a: 'Yes, a flat after-hours fee that we tell you on the phone before we send anyone.' },
      { q: 'What if I smell gas?', a: 'Leave the house right away and call 911 and your gas company from outside. Do not call us first.' },
    ],
  },
];

/** Describes each photo for people who cannot see it. */
export const photoAlt: Record<string, string> = {
  furnace: 'A technician with a flashlight inspecting a gas furnace in a clean basement.',
  ac: 'A technician checking gauges on an outdoor air conditioning unit beside a house.',
  maintenance: 'A technician with a checklist changing a furnace filter while a homeowner watches.',
  install: 'Two technicians installing a new furnace and air handler in a utility room.',
  emergency: 'A service van in a snowy driveway at night, a technician carrying a toolbox to a glowing front door.',
};
