export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-cyan-400 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">TechM8</h3>
          <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Quis dignissim a porttitor
            volutpat etiam. Purus mauris adipiscing diam nunc lacus ut sapien
            sodales id. Non augue sit laoreet mauris adipiscing velit arcu dui urna.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <span className="font-medium text-white">Email : </span>
              Lorem ipsum dolor
            </li>
            <li>
              <span className="font-medium text-white">Phone : </span>
              Lorem ipsum dolor
            </li>
            <li>
              <span className="font-medium text-white">Address : </span>
              Lorem ipsum dolor
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
