# Define an array with the old and new file names
$files = @(
    "1-computers-as-general-purpose.tsx ComputersAsGeneralPurpose.tsx",
    "2-simple-calculations-on-binary-digits.tsx SimpleBinaryCalculations.tsx",
    "3-the-von-neumann-model.tsx VonNeumannModel.tsx",
    "4-the-cpu-fundamental-fetch-decode-execute.tsx CPUFundamentalFetchDecodeExecute.tsx",
    "5-the-cpu-instruction-set.tsx CPUInstructionSet.tsx",
    "6-assembly-and-high-level-languages.tsx AssemblyAndHighLevelLanguages.tsx",
    "7-translation-of-high-level-language.tsx TranslationOfHighLevelLanguage.tsx",
    "8-interactive-page.tsx InteractivePage.tsx"
)

# Loop through the array and rename the files
foreach ($file in $files) {
    $fileParts = $file -split ' '
    $oldName = $fileParts[0]
    $newName = $fileParts[1]
    Rename-Item -Path $oldName -NewName $newName
}
