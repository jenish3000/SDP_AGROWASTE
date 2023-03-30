import React, { useState,useEffect } from "react";
import './Research.css'
const Reasearch = () => {
    const [input,setInput]=useState('');
    useEffect(() => {
        const form = document.querySelector('#f1');

        // Add an event listener to the form for the 'submit' event
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Call a function to execute the script
            handleSubmit();
        });

        function handleSubmit() {
            var inp = parseFloat(document.getElementById("input").value);


            var box = document.getElementById("box");
            let boxl = 280 * inp;
            var boxn = document.createTextNode(boxl);
            box.appendChild(boxn);

            var residue = document.getElementById("residue");
            let residuel = 24 * boxl;
            var residuen = document.createTextNode(residuel);
            residue.appendChild(residuen);

            var price = document.getElementById("price");
            let pricel = residuel * 5;
            var pricen = document.createTextNode(pricel);
            price.appendChild(pricen);

            document.getElementById("input").value = "";

        }
    });

    return (
        <>
            <div>
                <header>
                    <h1 class="head">
                        Survey of Punjab satellite images Using GIS(Geographic Information System)
                    </h1>
                    <hr /><hr />
                </header>
                <div>
                    <form id="f1" onsubmit="handleSubmit(); return false;">
                   
                        <input type="text" id="input" name="input" value={input.input} />(in hector)
                        <input type="submit"  id="submit" />
                        <label id="l1"> Enter size of farm:</label>
                        
                    </form>
                    <div id="result">
                        Box Generated:<div id="box"></div>
                        <br />
                        Total residue(waste) Generated (in kgs):<div id="residue"></div>
                        <br />
                        Total expected revenue: Rs<div id="price"></div>
                        <br />
                    </div>

                </div>
                <header>
                    <h1 class="head">Introduction</h1>
                    <hr /><hr />
                </header>
                <div>
                    We have used well-known GIS software QGIS , Also used SCP(Semi-Automatic Classification) plugin.

                    <h1>SCP</h1>
                    <span>The Semi-Automatic Classification Plugin (SCP) is a free open source plugin for QGIS that allows  for the supervised classification of remote sensing images, providing tools for the download, the preprocessing and postprocessing of images.

                    </span><br /><br />

                    <span> overall objective of SCP is to provide a set of intertwined tools for raster processing in order to make an automatic workflow and ease the land cover classification, which could be performed also by people whose main field is not remote sensing.</span><br /><br />

                    <span>Search and download is available for ASTER, GOES, Landsat, MODIS, Sentinel-1, Sentinel-2, and Sentinel-3 images. Several algorithms are available for the land cover classification. This plugin requires the installation of GDAL, OGR, Numpy, SciPy, and Matplotlib. Some tools require also the installation of SNAP (ESA Sentinel Application Platform).</span>
                    <br /><br />
                </div>
                <span id="raw">Satellite Image</span><span id="pro">Processed Image</span><span id="remarks">Remarks</span>
                <div class="flex">
                    <img class="img" src="../images/raw.png" />
                    <img class="img" src="../images/processed.png" />
                    <img src="../images/label.png" height="10%" />

                </div>
                <br />
                <div id="csv">
                    <img id="csvimg" src="../images/csv.png" height="50%" width="40%" />
                </div>
                <footer>
                    For more details Contact : 20ituos130@ddu.ac.in | 20itubs141@ddu.ac.in | 20itubs019@ddu.ac.in



                </footer>
            </div>
        </>
    );
}

export default Reasearch
