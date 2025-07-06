import { Mail, MapPin } from "lucide-react";

const AboutHeading = () => {
  return (
    <>
      <div className="space-y-2">
        <h2>Charanaraj N</h2>
        <p className="text-lg">Frontend Engineer</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Mail size={16} />
          <a href="mailto:ncharanaraj@gmail.com" className="text-sm">
            ncharanaraj@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={16} />
          <p className="text-sm">Karnataka, India</p>
        </div>
      </div>
    </>
  );
};

export default AboutHeading;
