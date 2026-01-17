import CharacterSheet from "./CharacterSheet";
import ExperienceLog from "./ExperienceLog";
import TalentTree from "./TalentTree";
import ScrollsOfWisdom from "./ScrollsOfWisdom";

// Layout grid is handled by ProfileLayout CSS Grid.
// We return two main divs to populate the two columns of the grid.

const Origin = () => {
  return (
    <>
      {/* Left Column: Character Stats, Bio & Education */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <CharacterSheet />
        <ScrollsOfWisdom />
      </div>

      {/* Right Column: Quests (Experience) & Talents (Skills) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <ExperienceLog />
        <TalentTree />
      </div>
    </>
  );
};

export default Origin;
