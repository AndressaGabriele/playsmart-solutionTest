interface TabItemProps {
  name: string
  status: string
  onClick: () => void
}

export function TabItem({ name, status, onClick }: TabItemProps) {
  const color = status === "on" ? "#EA6830" : "#484848"

  return (
    <li>
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {name}
      </button>
    </li>
  )
}
