export const viewEmployeeFormData = [
    {
        label: "Name",
        type: "text",
        placeholder: "Enter Name",
        required: true,
        id: "name",
    },
    {
        label: "Father Name",
        type: "text",
        placeholder: "Father Name",
        required: true,
        id: "fatherName",
    },
    {
        label: "D.O.J.",
        type: "date",
        placeholder: "",
        required: true,
        id: "Site Name1",
    },
    {
        label: "Unit",
        type: "dropdown",
        placeholder: ["Unit", "Unit2", "Unit3"],
        required: true,
        id: "unit",
    },
    {
        label: "Import",
        type: "file",
        placeholder: "Choose File",
        required: true,
        id: "file",
    },
    {
        label: "Status",
        type: "radio",
        status: ["Active", "Resigned", "Bloacklisted"],
        required: true,
    }
];