import { FolderGit2 } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Gallery() {
    return (
        <>
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-10 fade-in-slide">
                <FolderGit2 size={33} className="text-slate-900 mr-2" />
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in-slide">
                <ProjectCard
                    imgSrc={"/clinic-attendant.png"}
                    alt={"Clinic Attendant"}
                    name={"Clinic Attendant"}
                    desc={
                        "Winner of the Engineers' Choice Award: built a hands-free Alexa and Google Assistant voice app for contactless clinic check-ins using Jovo, AWS Lambda, DynamoDB, and GitHub Actions."
                    }
                    isWinner={true}
                    onClick={() => {
                        window.open(
                            "https://devpost.com/software/clinic-attendant",
                            "_blank",
                            "noopener,noreferrer",
                        );
                    }}
                />
                <ProjectCard
                    imgSrc={"/wildfire-alert-project.jpg"}
                    alt={"Wildfire Alert"}
                    name={"Wildfire Alert"}
                    desc={
                        "Developed an IoT forest fire alert system designed to detect wildfires earlier than satellites using Arduino micro-sensors, Node.js, Express.js, and Firebase, paired with a jQuery and Bootstrap monitoring interface."
                    }
                    isWinner={false}
                    onClick={() => {
                        window.open(
                            "https://devpost.com/software/wildfire-alert-ikpe7b",
                            "_blank",
                            "noopener,noreferrer",
                        );
                    }}
                />
            </div>
        </>
    );
}
