import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { getPropertyById } from "../../../api";


export default function SingleProperty() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const fetchProperty = async () => {
        setIsLoading(true);
        try {
        const data  = await getPropertyById(id);
        setProperty(data);
    } catch (error) {
        console.error(err);
    } finally {
        setIsLoading(false);
    }
};
fetchProperty();
}, [id]);

if (isLoading) return <p>Loading...</p>;
if (!property) return <p>Property not found</p>;

return (
<div>
    <h1>{property.property_name}</h1>
    <p>{property.description}</p>
    </div>
    );
}