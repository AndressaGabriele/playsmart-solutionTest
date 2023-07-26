interface TabItemProps {
  name: string
  status: string
  onClick: () => void
}

export function TabItem({ name, status, onClick }: TabItemProps) {
  const color = status === "on" ? "#EA6830" : "#484848"

  return (
    <li> 
      {/* faltou um cuidado com o cursor do mouse */}
      <button style={{ backgroundColor: color, cursor: 'pointer' }} onClick={onClick}> 
        {name}
      </button>
    </li>
  )
}
