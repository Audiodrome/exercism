// var DnaTranscriber = {

//     var amino = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'} 
//     this.toRna = toRna;
// };

// //var dna = new DnaTranscriber('black');

// //dna.toRna;
// //console.log(dna.toRna);

// function toRna(dna, amino)
// {
//     if (dna === 'C')
// 	return amino.c;
// }
// module.exports = DnaTranscriber;

function double_helix(strand)
{
    //console.log(dna.split('').map(rna_swap));
    console.log(strand);

    var bool = check_strand(strand);

    console.log('boolean: ', bool);
    
    strand = strand.split('').map(helix_swap).join().replace(/,/g, '');
    
    return strand;
}

function helix_swap(strand)
{
    //var base = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A', 'U': 'A', 'A': 'T'};
    var base = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A', 'U': 'A'};
    return base[strand];
}

function bin_srch(arr, key)
{
    var lo = 0,
        hi = arr.length - 1,
        mid,
        element;

    while (lo <= hi) {
        mid = ((lo + hi) >> 1); //bitwise shift
        element = arr[mid];

        if (element < key) {
            lo = mid + 1;
        } else if (element > key) {
            hi = mid - 1;
        } else {
            //return arr[mid];
            return true;
        }
    }
    //return -1;
    return false;
}

var check_strand = function (strand)
{
    strand = strand.split('').sort();

    var U = bin_srch(strand, 'U');

    console.log('What is U: ', U);

    if (U === true)
        //console.log('Ribonucleic Acid');
        return true;
    else
        //console.log('Deoxyribonucleic acid');
        return false;
    //check for U, do binary search.
    //true is rna, false otherwise.
}

var DnaTranscriber = function() {

    //var base = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'};
    //console.log(base.C);
    
    this.toRna = double_helix;
    this.toDna = double_helix;
};

module.exports = DnaTranscriber;
