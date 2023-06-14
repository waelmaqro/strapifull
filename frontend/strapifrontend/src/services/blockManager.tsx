import LeftRight from "@/components/LeftRight";

const BlockManager = (blocks: any) => {
  return (
    <div>
      {blocks.map((block: any) => {
        return getBlockComponent(block);
      })}
    </div>
  );
};

const getBlockComponent = (block: any) => {
  switch (block.__component) {
    case "blocks.left-right":
      return <LeftRight blockData={block} />;
  }
};

export default BlockManager;
