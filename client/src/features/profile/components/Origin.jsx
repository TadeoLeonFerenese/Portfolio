import CharacterSheet from "./CharacterSheet";
import ExperienceLog from "./ExperienceLog";
import TalentTree from "./TalentTree";
import ScrollsOfWisdom from "./ScrollsOfWisdom";

// Layout grid is handled by ProfileLayout CSS Grid.
// We return two main divs to populate the two columns of the grid.

const Origin = () => {
  return (
    <>
      {/* Full-width Character Sheet Navbar */}
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <CharacterSheet />
      </div>

      {/* Full-width Quest Log */}
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <ExperienceLog />
      </div>

      {/* Two-column grid: Education and Skills side by side */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "1rem", 
        width: "100%" 
      }}
      className="responsiveGrid">
        <ScrollsOfWisdom />
        <TalentTree />
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .responsiveGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default Origin;
