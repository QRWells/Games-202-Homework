class PRTMaterial extends Material {
  constructor(vertexShader, fragmentShader) {
    super(
      { // Set in WebGLRenderer.js
        uPrecomputeLR: { type: "updatedInRealTime", value: null },
        uPrecomputeLG: { type: "updatedInRealTime", value: null },
        uPrecomputeLB: { type: "updatedInRealTime", value: null },
      },
      ["aPrecomputedLT"],// comes from the MeshRenderer.js
      vertexShader,
      fragmentShader,
      null
    );
  }
}

async function buildPRTSkyBoxMaterial(vertexPath, fragmentPath) {
  let vertexShader = await getShaderString(vertexPath);
  let fragmentShader = await getShaderString(fragmentPath);

  return new PRTMaterial(vertexShader, fragmentShader);
}
