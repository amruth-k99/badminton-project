import Heading from "../shared/heading";

export function UpcomingEvents() {
  const events = [
    {
      name: "Mid Atlantic",
      date: "01-01-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "New York, NY",
      totalParticipants: 10,
    },
    {
      name: "Mid West",
      date: "01-21-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Naperville, IL",
      totalParticipants: 10,
    },
    {
      name: "Northern",
      date: "10-11-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Westborough, MA",
      totalParticipants: 10,
    },
    {
      name: "Southern",
      date: "01-01-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Roswell, GA",
      totalParticipants: 10,
    },
    {
      name: "Mid Atlantic",
      date: "01-01-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "New York, NY",
      totalParticipants: 10,
    },
    {
      name: "Mid West",
      date: "01-21-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Naperville, IL",
      totalParticipants: 10,
    },
    {
      name: "Northern",
      date: "10-11-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Westborough, MA",
      totalParticipants: 10,
    },
    {
      name: "Southern",
      date: "01-01-2024",
      link: "https://www.tournamentsoftware.com/sport/regulations.aspx?id=4A758A71-3160-4706-87B5-627660417671",
      location: "Roswell, GA",
      totalParticipants: 10,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-16 pt-10">
      <div className="">
        <div className="text-center">
          <p className="text-md  text-gray-600">Important Dates for</p>
          <Heading>Upcoming Events</Heading>
          <div className="text-lg text-gray-800 mt-2">
            We regularly have some exciting upcoming events. Check them out
            below.
          </div>
        </div>

        <div className="mx-auto mt-10">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-white sm:rounded-lg">
                  <table className="min-w-full divide-y">
                    <thead className="bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-5 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                        >
                          Participants
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Link</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                      {events.map((event) => (
                        <tr key={event.name}>
                          <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {event.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {event.totalParticipants}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {event.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-700"
                            >
                              Show More
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
