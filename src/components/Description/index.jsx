import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import './description.css';
 

function Description ({
    title, description, host, rating, location, equipments, tags,
}) {
    return (
        <div className="info">
            <div className="info1"> 
                <div className="card1">
                    <h1 className="title">{title}</h1>
                    <p className="locate">{location}</p>
                    <Tag tags={tags} />
                </div>
                <div className="card2">
                    <Host host = {host} />
                    <Rate rate = {rating} />
                </div>
            </div>
            <div className="descEquip">
                <section className="desc">
                    <Collapse 
                        title = {"Description"} 
                        content = {description} />
                </section>
                <section className="equip">
                    <Collapse 
                        title = {"Equipements"}
                        content = {equipments} />
                </section>
            </div>
        </div>
    )
}

export default Description ;