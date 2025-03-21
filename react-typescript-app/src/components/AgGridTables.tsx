import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react'
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'
import type { ColDef } from 'ag-grid-community'
import { Ability, HeldItem } from '../types/pokemon'

interface AgGridTableProps {
  pokemonData: {
    abilities: Ability[]
    held_items: HeldItem[]
    [key: string]: unknown
  }
}

ModuleRegistry.registerModules([AllCommunityModule])

const AgGridTables: React.FC<AgGridTableProps> = ({ pokemonData }) => {
  const abilityRowData = pokemonData.abilities.map((ability) => ({
    name: ability.ability.name,
    url: ability.ability.url,
    is_hidden: ability.is_hidden,
    slot: ability.slot,
  }))

  const heldItemRowData = pokemonData.held_items.map((heldItem) => ({
    name: heldItem.item.name,
    url: heldItem.item.url,
  }))

  const abilityColDefs = [
    { field: 'name' },
    { field: 'url' },
    {
      field: 'is_hidden',
      cellRenderer: (params: CustomCellRendererProps) => <span>{params.value ? 'Yes' : 'No'}</span>,
    },
    { field: 'slot' },
  ]

  const heldItemColDefs = [{ field: 'name' }, { field: 'url' }]

  const defaultColDef: ColDef = {
    flex: 1,
  }

  return (
    <div className="p-2 flex flex-col justify-start gap-2">
      <AgGridReact
        theme={themeQuartz}
        rowData={abilityRowData}
        columnDefs={abilityColDefs}
        defaultColDef={defaultColDef}
        domLayout="autoHeight"
      />
      <AgGridReact
        theme={themeQuartz}
        rowData={heldItemRowData}
        columnDefs={heldItemColDefs}
        defaultColDef={defaultColDef}
        domLayout="autoHeight"
      />
    </div>
  )
}

export default AgGridTables
